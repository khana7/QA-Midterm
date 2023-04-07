const LoginPage = require('../pageobjects/login.page');
const Platforma = require('../pageobjects/platforma.page');


describe('Login page', () => {
  before(async () => {
    await LoginPage.open();
  });

  it('should allow a user to log in successfully', async () => {
    await LoginPage.login('Admin', 'Admin@Navi');
  });   

  it('should open search form and perform platforma filtering set to 150001+', async () => {
    await Platforma.performPlatformaFilter();

  });



  
});