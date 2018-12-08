const assert = require('assert');
const { init, DBObject, Object: Obj, ping } = require("../lib/index.js");
init({ appkey: '123123', masterKey: '123123', endpoint: 'http://localhost:9999/api', v: '0.0.1' });

describe('DBObject', function(){

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

  it('Update function', function(done){
    const obj = new DBObject('test', { id: 1 });
    obj.set({
      name: '-t1',
      val: '-0.1',
    })
    obj.save().then(function(o){
      console.log(o)
      done();
    }).catch(function(err){
      done(err);
    });
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


  

  // it('Batch function', function(done){
  //   var obj = new YF.Object('app_versions');
  //   obj.set({
  //     app: 'node-client',
  //     version: '0.1',
  //     device: 'web',
  //     download: 'www.npmjs.com',
  //   })
  //   obj.create().then(function(o){
  //     console.log(o)
  //     done();
  //   }).catch(function(err){
  //     done(err);
  //   });
  // });

});
// describe('Object', function(){
//   it('Object function', function(done){
//     var obj = new YF.Object('ss_jobs');
//     obj.getById(1).then(function(o){
//       console.log(o.get())
//       done();
//     }).catch(function(err){
//       done(err);
//     });
//   });

//   it('Object getByCondition', function(done){
//     var obj = new YF.Object('fpm_template');
//     obj.getByCondition("name='test'").then(function(o){
//       console.log(o.get())
//       done();
//     }).catch(function(err){
//       done(err);
//     });
//   })

// })

// describe('Batch', function(){
//   it('Batch function', function(done){
//     var batch = new YF.Batch('ss_company');
//     batch.insert([
//       {company: 'yunjia'},
//       {company: 'yunplus'},
//       {company: 'yun+'},
//     ]).then(function(o){
//       console.log(o)
//       done();
//     }).catch(function(err){
//       done(err);
//     });
//   });

// })
