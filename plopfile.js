module.exports = function(plop) {
  plop.setGenerator('pi-sdk:install', {
    description: 'Install the PiButton component (no prompt, always PiButton.tsx)',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: './PiButton.tsx',
        templateFile: 'plop-templates/PiSdkComponentWithBuy.tsx.hbs',
        data: { name: 'PiButton' },
        force: true
      }
    ]
  });
};
