(function testNoteIsInstantiated () {
        let note = new Note('hello', '12.07');
        let assertion = (note.text === 'hello2');
        let expected = 'hello'
        assert.isTrue(assertion, expected)
})(this);

(function testTimeIsInstantiated () {
        let note = new Note('hello', '12.07');
        let assertion = (note.time === '12.07');
        let expected = '12.07'
        assert.isTrue(assertion, expected)

})(this);

