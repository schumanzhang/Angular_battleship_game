import { BattleshipGamePage } from './app.po';

describe('battleship-game App', function() {
  let page: BattleshipGamePage;

  beforeEach(() => {
    page = new BattleshipGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
