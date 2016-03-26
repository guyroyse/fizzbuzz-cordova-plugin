exports.defineAutoTests = function() {

  describe('fizzbuzz', function() {

    it('returns the number it is handed', function(done) {
      window.fizzbuzz(1, function(result) {
        expect(result).toBe('1');
        done();
      });
    });

    it('returns other number it is handed', function(done) {
      window.fizzbuzz(2, function(result) {
        expect(result).toBe('2');
        done();
      });
    });

    it('returns fizz for multiples of 3', function(done) {
      window.fizzbuzz(3, function(result) {
        expect(result).toBe('fizz');
        done();
      });
    });

    it('returns fizz for other multiples of 3', function(done) {
      window.fizzbuzz(6, function(result) {
        expect(result).toBe('fizz');
        done();
      });
    });

    it('returns buzz for multiples of 5', function(done) {
      window.fizzbuzz(5, function(result) {
        expect(result).toBe('buzz');
        done();
      });
    });

    it('returns buzz for other multiples of 5', function(done) {
      window.fizzbuzz(10, function(result) {
        expect(result).toBe('buzz');
        done();
      });
    });

    it('returns fizzbuzz for muliples of 3 and 5', function(done) {
      window.fizzbuzz(15, function(result) {
        expect(result).toBe('fizzbuzz');
        done();
      });
    });

    it('returns fizzbuzz for other muliples of 3 and 5', function(done) {
      window.fizzbuzz(30, function(result) {
        expect(result).toBe('fizzbuzz');
        done();
      });
    });

    it("returns Invalid Number for values that aren't numbers", function(done) {
      window.fizzbuzz('', function(result) {
        expect(result).toBe('Invalid Number');
        done();
      });
    });

  });
};
