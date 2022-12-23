const passportConfig = {
    credentials: {
        tenantName: 'participateb2c.onmicrosoft.com',
        clientID: '32316b44-e542-4bb4-b3d9-532eb8601e83',
    },
    policies: {
        policyName: 'B2C_1A_SIGNUP_SIGNIN',
    },
    metadata: {
        b2cDomain: 'participateb2c.b2clogin.com',
        authority: 'login.microsoftonline.com',
        discovery: '.well-known/openid-configuration',
        version: 'v2.0',
    },
    settings: {
        isB2C: true,
        validateIssuer: false,
        passReqToCallback: true,
        loggingLevel: 'info',
        loggingNoPII: false,
    },
    protectedRoutes: {
        todolist: {
            endpoint: '/api/todolist',
            delegatedPermissions: {
                read: ['ToDoList.Read', 'ToDoList.ReadWrite'],
                write: ['ToDoList.ReadWrite'],
            },
        },
    },
};

module.exports = passportConfig;

