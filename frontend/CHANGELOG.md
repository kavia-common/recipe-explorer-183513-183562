# Changelog

All notable changes to this frontend will be documented in this file.

## 2025-11-05
- Bumped React and ReactDOM to ^18.3.1 (safe minor update).
- Kept react-scripts at 5.0.1 (latest compatible with CRA5).
- Updated testing toolchain:
  - @testing-library/react ^16.0.1
  - @testing-library/jest-dom ^6.6.3
  - @testing-library/user-event ^14.5.2
- Added overrides for browserslist (^4.24.2) and semver (^7.6.3) to address security advisories without breaking CRA5.
- Set test script to run non-interactively by default (`--watchAll=false`) to align with CI.
