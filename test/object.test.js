const assert = require('assert');
const { init, DBObject, Object: Obj, ping } = require("../lib/index.js");
init({ appkey: '123123', masterKey: '123123', endpoint: 'http://localhost:9999/api', v: '0.0.1' });

describe('DBObject', function(){
  before('', function(done){
    const obj = new DBObject('test');
    obj.clear()
      .then(data => {
        done();
      })
      .catch(done)
  })

  after('', function(done){
    const obj = new DBObject('test');
    obj.clear()
      .then(data => {
        done();
      })
      .catch(done)
  })

  it('Create function', function(done){
    const obj = new DBObject('test');
    obj.set({
      name: 't1',
      val: '0.1',
    })
    obj.create().then(function(o){
      console.log(o)
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('Update function', async () =>{
    const obj = new DBObject('test', { id: 1 });
    obj.set({
      name: '-t1',
      val: '-0.1',
    })
    try{
      let data = await obj.save();
      console.log(data)
    }catch(e){
      console.log('its fine', e.errno, e.message)
    }
  });

  it('Remove function', function(done){
    const obj = new DBObject('test');
    obj.remove(4).then(function(o){
      assert.strictEqual(o, true, 'should be return true, if ok')
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('getById function', function(done){
    const obj = new DBObject('test');
    obj.getById(2).then(function(o){
      console.log(o)
      // assert.strictEqual(o, true, 'should be return true, if ok')
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('getByCondition function', function(done){
    const obj = new DBObject('test');
    obj.fields('id,name,val').getByCondition({ name: 't2'}).then(function(o){
      console.log(o)
      // assert.strictEqual(o, true, 'should be return true, if ok')
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('Batch Create function', function(done){
    const obj = new DBObject('test');
    obj.batch([{
      name: 'a1',
      val: 'v1',
    },{
      name: 'a2',
      val: 'v1',
    },{
      name: 'a3',
      val: 'v1',
    },{
      name: 'a4',
      val: 'v1',
    }])
      .then(function(o){
      
      assert.strictEqual(o, 4, 'should be return 4, if ok')
      done();
    }).catch(function(err){
      done(err);
    });
  });

});