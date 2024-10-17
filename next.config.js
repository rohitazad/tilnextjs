/** @type {import('next').NextConfig} */

const { execSync } = require('child_process');


module.exports = {
    generateBuildId: async () => {
      try {
        // Fetch the latest commit hash
        const commitHash = execSync('git rev-parse HEAD').toString().trim();
        return commitHash; // Return the commit hash as the build ID
      } catch (error) {
        console.error('Error fetching commit hash:', error);
        return 'build'; // Fallback ID if git command fails
      }
    },
  };
