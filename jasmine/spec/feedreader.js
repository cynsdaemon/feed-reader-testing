/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

   // DOM References:
   const menu = document.querySelector('.menu-icon-link');
   const body = document.querySelector('body');

    describe('RSS Feeds', function() {

        it('all feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('each url is defined', function(){
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }

        });

        it('and each url has a name defined', function(){
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('', null);
            }
        });

    });

    describe('the menu', function(){
        it('the menu is hidden by default', function(){
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        it('the menu displays when clicked', function(){
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
        });

        it('and the menu is hidden when clicked again', function(){
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });


                 /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    });

    describe('Initial Entries', function(){
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    });

    describe('New Feed Selection', function(){
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });

}());
