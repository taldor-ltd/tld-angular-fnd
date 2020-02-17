
// 1. make sure ts.config contains this config under "paths":
//
//   "@extensions/*" : [
//     "node_modules/@taldor-ltd/tld-angular-fnd/app/extensions/*.extensions.ts""
//   ]

// 2. make sure to  import '@extensions/window' in app.component.ts

interface Window {
    // add extension methods declarations here:
    displayAllLogs: boolean;
    executeAllEnvironments: boolean; // usage - util functions -> execute environment / ignore environment

    toggleDisplayAllLogs(): boolean;
    toggleExecuteAllEnvironments(): boolean; // usage - util functions -> execute environment / ignore environment
}

// default value for displayAllLogs
// !localStorage.getItem('displayAllLogs') ? localStorage.setItem('displayAllLogs', "false") : null;
window.displayAllLogs = localStorage.getItem('displayAllLogs') === 'true' ? true : false;

// default value for executeAllEnvironments
// !localStorage.getItem('executeAllEnvironments') ? localStorage.setItem('executeAllEnvironments', "false") : null;
window.executeAllEnvironments = localStorage.getItem('executeAllEnvironments') === 'true' ? true : false;

