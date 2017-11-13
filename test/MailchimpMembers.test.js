import MailChimp from '../src/index';

/**
 * Remember to replace (email, api-key, list-id) with real values
 */

let mailChimp = new MailChimp('email','api-key');

test('Add new members', ()=>{
    expect.assertions(1);

    const body = {
        email_address:'some mail@gmail.com',
        status:'subscribed'
    };

    return mailChimp.members.addMembers('list-id',body).then((data)=>{
        /**
         * The code below is a test code - You can do whatever you like with 'data'
         */
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    })
});

test('Check info of all members in a list',()=>{
    expect.assertions(1);
    const query = {};
    return mailChimp.members.readMembersInfo('list-id',query).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    })
});

test('Check info for a subscriber', ()=>{
    expect.assertions(1);
    const query = {};
    return mailChimp.members.readMemberInfo('list-id','subscriber-hash',query).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    })
});

test('Update member', ()=>{
    expect.assertions(1);
    const body = {};

    return mailChimp.members.updateMemberInfo('list-id', 'subscriber-hash',body).then((data)=>{
        expect(data.status).toBe(200);
    }).catch((error)=>{
        expect(error.status).toBe(400);
    })
});

test('Delete Member',()=>{
    expect.assertions(1);

    return mailChimp.members.deleteMember('list-id', 'subscriber-hash').then((data)=>{
        expect(data.status).toBe(204);
    }).catch((error)=>{
        expect(error.status).toBe(404);
    })
});