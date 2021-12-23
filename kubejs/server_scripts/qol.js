onEvent('recipes', event => {

// Easy Stick Recipe

event.shaped('16x minecraft:stick', [
    'S',
    'S'
  ], {
    S: '#minecraft:logs'
  })


// Easy Hopper Recipe

event.shaped('minecraft:hopper', [
    'SAS',
    'SAS',
    ' S '
  ], {
    S: 'minecraft:iron_ingot',
    A: '#minecraft:logs'
  })
  
  // Tinker's Ingot Cast
  
 event.shaped('tconstruct:ingot_cast', [
    ' S ',
    'SAS',
    ' S '
  ], {
    S: '#tconstruct:casts/gold',
    A: '#forge:ingots/iron'
  })
  
  
  // Ender Dust Conversion
  event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'emendatusenigmatica:ender_dust', '#forge:dusts/ender')
  event.remove({id: 'miniutilities:ender_dust_to_ender_pearl'})
  event.shapeless('minecraft:ender_pearl', ['9x #forge:dusts/ender'])

})