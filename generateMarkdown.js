// function that returns a license badge

function renderLicenseBadge(license) {
  if(!license) return '';
  return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }

// function that returns the license link

function renderLicenseLink(license) {
  if(!license) return '';
  return `[License](https://opensource.org/licenses/${license})`
}

// function that returns the license section of README

function renderLicenseSection(license) {
  if(!license) return '';
  return `##Licensed with ${license}. For more information, see the [license link]${renderLicenseLink(license)}).`;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
$renderLicenseBadge(data.license)}

## Description
${data.description}

${renderLicenseSection(data.license)}`;

}

module.exports = generateMarkdown;
