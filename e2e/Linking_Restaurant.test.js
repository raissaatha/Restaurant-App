/* eslint-disable no-undef */

Feature('Linking to detail restaurant');

Scenario('test something', async ({ I }) => {
  // I.amOnPage('/');
  // I.seeElement('a.card-restaurant');
  // I.click(locate('a.card-restaurant').first());
  // I.wait(2);
  // I.seeElement('#likeButton');
  // I.click('#likeButton');
  I.amOnPage('/');
  I.wait(2);
  I.seeElement('a.card-restaurant');
  await I.grabTextFrom(locate('a.card-restaurant').first());
  I.click(locate('a.card-restaurant').first());
  I.wait(2);
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.click(locate('a.card-restaurant').first());
  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('a.card-restaurant');
});
