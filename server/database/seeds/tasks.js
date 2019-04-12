const tableName = 'tasks';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(tableName).truncate()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        // {
        //   title: 'Finish',
        //   priority: 3,
        //   task: 'Finish this application',
        //   createdBy: 'system',
        //   assignedTo: 'unassigned' ,
        // },{
        //   title: 'Feed the Kids',
        //   priority: 3,
        //   task: 'Feed the dogs',
        //   createdBy: 'system',
        //   assignedTo: 'unassigned' ,
        // },{
        //   title: 'Call Jen',
        //   priority: 3,
        //   task: 'Phone a friend',
        //   createdBy: 'system',
        //   assignedTo: 'unassigned' ,
        // },{
        //   title: 'IT',
        //   priority: 3,
        //   task: 'Upgrade my laptop',
        //   createdBy: 'system',
        //   assignedTo: 'unassigned' ,
        // },{
        //   title: 'Target Run',
        //   priority: 3,
        //   task: 'Buy groceries at Target',
        //   createdBy: 'system',
        //   assignedTo: 'unassigned' ,
        // },{
        //   title: 'Build a Site',
        //   priority: 3,
        //   task: 'Build a website',
        //   createdBy: 'system',
        //   assignedTo: 'unassigned' ,
        // },
        {
          title: 'Taxes',
          priority: 1,
          status: 'pending',
          task: 'Do Taxes',
          createdBy: 'system',
          assignedTo: 'unassigned' ,
        },{
          title: 'Learning',
          priority: 3,
          status: 'pending',
          task: 'Watch AWS ACloudGuru',
          createdBy: 'system',
          assignedTo: 'unassigned' ,
        },
        {
          title: 'New Doggie',
          priority: 3,
          status: 'pending',
          task: 'Adopt another dog',
          createdBy: 'system',
          assignedTo: 'unassigned' ,
        },{
          title: 'Donation',
          priority: 3,
          status:'current',
          task: 'Sign up to donate kidney',
          createdBy: 'system',
          assignedTo: 'unassigned' ,
        }
      ]);
    });
};

