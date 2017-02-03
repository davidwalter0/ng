import { SkeletonPage } from './app.po';

describe('ngc3-s2 App', function () {
  let page: SkeletonPage;

  beforeEach(() => {
    page = new SkeletonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
