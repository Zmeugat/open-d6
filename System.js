Hooks.once('init', function() {
  console.log('Open d6 System initialized.');
});

// Define custom Entity classes
class OpenD6Actor extends Actor {
  // ...
}

class OpenD6Item extends Item {
  // ...
}

// Register custom Entity classes
CONFIG.Actor.entityClass = OpenD6Actor;
CONFIG.Item.entityClass = OpenD6Item;