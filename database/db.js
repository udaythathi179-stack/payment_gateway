/**
 * BRIL Fee Payment Portal - Database Access Layer (Node.js)
 * Brilliant Institute of Engineering & Technology, Hyderabad
 * Provides querying for Student Master Directory & Fee Records
 */

'use strict';

const fs = require('fs');
const path = require('path');

const STUDENTS_JSON_PATH = path.join(__dirname, 'students_data.json');

let cachedStudents = null;

/**
 * Load student records with caching
 * @returns {Array<Object>} List of student objects
 */
function getStudents() {
  if (!cachedStudents) {
    if (!fs.existsSync(STUDENTS_JSON_PATH)) {
      throw new Error(`Students data file not found at ${STUDENTS_JSON_PATH}`);
    }
    const raw = fs.readFileSync(STUDENTS_JSON_PATH, 'utf8');
    cachedStudents = JSON.parse(raw);
  }
  return cachedStudents;
}

/**
 * Find student by Hall Ticket / Roll Number (case-insensitive)
 * @param {string} roll - Hall ticket or roll number (e.g., '24QA1A0501' or '501')
 * @returns {Object|null} Student record or null
 */
function getStudentByRoll(roll) {
  if (!roll) return null;
  const list = getStudents();
  const search = String(roll).trim().toUpperCase();

  // 1. Exact match on full roll
  const exact = list.find((s) => s.roll && s.roll.toUpperCase() === search);
  if (exact) return exact;

  // 2. Suffix match (e.g. entering "501" matches "24QA1A0501")
  const suffix = list.find((s) => s.roll && s.roll.toUpperCase().endsWith(search));
  if (suffix) return suffix;

  return null;
}

/**
 * Filter students by section or quota
 * @param {Object} query - e.g. { section: 'Section A', quota: 'Convenor Quota (EAPCET)' }
 * @returns {Array<Object>} Matching students
 */
function filterStudents(query = {}) {
  const list = getStudents();
  return list.filter((s) => {
    if (query.section && s.section !== query.section) return false;
    if (query.quota && s.quota !== query.quota) return false;
    if (query.isManagement !== undefined && Boolean(s.isManagement) !== Boolean(query.isManagement)) return false;
    return true;
  });
}

/**
 * Get college fee configuration defaults
 * @returns {Object} Fee tier amounts
 */
function getFeeConfig() {
  return {
    college: 'Brilliant Institute of Engineering & Technology',
    batch: 'CSE 2024-2028',
    tuitionFee: 72000,
    jntuFee: 6500,
    combinedTotal: 78500,
    currency: 'INR',
    upiVpa: 'brilcollege@sbi',
  };
}

module.exports = {
  getStudents,
  getStudentByRoll,
  filterStudents,
  getFeeConfig,
};
