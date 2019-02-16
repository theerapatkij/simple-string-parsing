describe('getLongestWord', function () {
    it('should return the longest word', function () {
        chai.expect(getLongestWord("Fie! Foe! Feel!  Fum??")).to.equal("Feel");
    });

    it('dash(-) as a part of word if in a middle like "eighty-nine"', function () {
        chai.expect(getLongestWord(" There are ninety-nine -problems- in computer science:")).to.equal("ninety-nine");
    });

    it('if tie return the first word', function () {
        chai.expect(getLongestWord("Fy Fan123 Foo456 Fee! Fie! Foe! Fum??")).to.equal("Fan");
    });

    it('return false if input is empty', function () {
        chai.expect(getLongestWord("")).to.equal(false);
    });

    it('return false if input only whitespace', function () {
        chai.expect(getLongestWord("                ")).to.equal(false);
    });

    it('return false if input has no any words or characters', function () {
        chai.expect(getLongestWord("  -124?!@$&@(!$^251212  ")).to.equal(false);
    });
});

describe('getSumDigits', function () {
    it('should return sum all of digits(0-9 no-sign)', function () {
        chai.expect(getSumDigits("Be -567 yourself;")).to.equal(18);
    });

    it('return false if input is empty', function () {
        chai.expect(getSumDigits("")).to.equal(false);
    });

    it('return false if input only whitespace', function () {
        chai.expect(getSumDigits("             ")).to.equal(false);
    });

    it('return false if input has no any digits', function () {
        chai.expect(getSumDigits("My name is Tom. Degree computer-science")).to.equal(false);
    });
});