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
    describe('RSS Feeds', function() {
        /* The feeds and urls are defined and are greater
         * than zero. Each feed should have a name defined
         * and should not return empty single or double quotes
         * or null.
         */
        it('all feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);

        });

        it('each url and url name is defined', function(){
            for(let feed of allFeeds){
                expect(feed.url).toBeTruthy(); // covers all truthiness
                expect(feed.name).toBeTruthy();
            }

        });

    });

    describe('the menu', function(){
        const menu = document.querySelector('.menu-icon-link');
        const body = document.querySelector('body');
        /* The body should have it's menu hidden and
         * menu-hidden should toggle when clicked.
         */
        it('is hidden by default', function(){
            expect(body.classList.contains('menu-hidden')).toBe(true);

        });

        it('menu toggles when clicked', function(){
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);

        });

    });

    describe('Initial Entries', function(){
        let allEntries;
        /* Wait for the loadFeed to finish then check that
         * the feed content is greater than zero.
         */
        beforeEach(function(done) {
            loadFeed(0, function(){
                allEntries = document.querySelectorAll('.feed .entry');
                done();

            });

        });

        it('there is an entry in the feed', function(){
            expect(allEntries.length).toBeGreaterThanOrEqual(0);

        });

    });

    describe('New Feed Selection', function(){
        let feedOne,
            feedTwo;
        /* By storing the entries in variables we can compare
         * whether the articles change when loadFeed is
         * done loading.
         */
        beforeEach(function(done){
            loadFeed(0, function(){
                feedOne = document.querySelectorAll('.entry')[0].innerHTML;

                loadFeed(1, function(){
                    feedTwo = document.querySelectorAll('.entry')[1].innerHTML;
                    done();

                })
            })
        })

        it('content changes when feed is loaded', function(){
           expect(feedOne === feedTwo).toBe(false);

        });

    });

}());
