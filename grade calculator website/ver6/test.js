const chai = window.chai
const expect = chai.expect
const assert = chai.assert

describe('calc', () => {
    it('should convert valid grade and weight percentages to course grade percentage', () => {
        const gradeArray = [90, 96, 98];
        const weightArray = [10, 30, 60];

        expect(calcHelper(gradeArray, weightArray)).to.deep.equal(96.60)
        //assert.strictEqual(calcHelper(gradeArray, weightArray), 96.60)
    })

    it('should not convert negative grade and weight percentages to course grade percentage', () => {
        const gradeArray = [-75, -81, -92];
        const weightArray = [10, 30, 60];
        
        expect(calcHelper(gradeArray, weightArray)).to.deep.equal(-1);
    })

    it('should not calculate without being given grade and weight percentages', () => {
        const gradeArray = [];
        const weightArray = [];

        expect(calcHelper(gradeArray, weightArray)).to.deep.equal(-1);
    })

    it('should not calculate if total weight percentage exceeds 100', () => {
        const gradeArray = [78, 89, 99];
        const weightArray = [50, 50, 50];

        expect(calcHelper(gradeArray, weightArray)).to.deep.equal(-1);
    })
})