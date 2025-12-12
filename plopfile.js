module.exports = function(plop) {
  plop.setGenerator('pi-sdk:install', {
    description: 'Install the PiButton component (no prompt, always PiButton.jsx)',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: './PiButton.jsx',
        templateFile: 'plop-templates/PiSdkComponentWithBuy.jsx.hbs',
        data: { name: 'PiButton' },
        force: true
      }
    ]
  });
};
