var assert = require("assert")
var Book = require("../../lib/book")

describe("simple string key/value set and get", () => {
    // given
    var book = Book()
    book("alice", "wonderland")
    book("bob", "segar")
    book("carl", "benjamin")

    // then
    assert.equal(book("carl"), "benjamin")
})

describe("simple get from initial page", () => {
    // given
    var book = Book(`|'alice'wonderland'|'bob'segar'|'carl'benjamin'|`)

    // then
    assert.equal(book("bob"), "segar")
})

describe("replacing a value updates list.from", () => {
    // given
    var book = Book(`|'alice'wonderland'|'bob'segar'|'carl'benjamin'|`)
    var page = book.page("bob").toString().toString() //?

    // when
    book("bob", "jones")

    var new_page = book.page("bob").toString().toString() //?

    // then
    assert.notEqual(new_page, page)
    assert.equal(book("bob"), "jones")
})

// test book.split
describe("splitting a page", () => {
    // given
    var book = Book(`|'alice'wonderland'|'bob'segar'|'carl'benjamin'|`)
    var page = book.page("bob").toString().toString() //?

    // when
    book.split("bob")

    var new_page = book.page("bob").toString().toString() //?

    // then
    assert.notEqual(new_page, page)
    assert.equal(book("bob"), "segar")
})