import verifyer from '../utils/Verifyer';

test('verify list id: uninitialized id',()=>{
    expect(()=>{
        var id;
        verifyer.verifyListId(id);
    }).toThrow();
});

test('verify list id: empty parameter ',()=>{
    expect(()=>{
        verifyer.verifyListId();
    }).toThrow();
});