onEvent('recipes', event => {

	//Remove Quartz Glass smelting recipe for conflict with Silicon
	event.remove({id: 'betternether:quartz_glass'})
	
	event.shaped('8x betternether:quartz_glass', [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: '#forge:gems/quartz',
    A: '#forge:glass'
  })


	//gold and iron chunks to vanilla ore
	event.remove({id: 'emendatusenigmatica:ore_from_chunk_crafting/gold'})
	event.remove({id: 'emendatusenigmatica:ore_from_chunk_crafting/iron'})
	
	event.shapeless('minecraft:gold_ore', ['#forge:ores/gold'])
	event.shapeless('minecraft:iron_ore', ['#forge:ores/iron'])
	
	
	//Processing for iron, gold, and aluminum in mechanical squeezer
	var ores = ['iron', 'gold', 'aluminum']
	ores.forEach(function(ore) {
		event.custom({
			'type': 'integrateddynamics:mechanical_squeezer',
			'item': `#forge:ores/${ore}`,
			'result': {
				'items': [
					{
						'item': `emendatusenigmatica:${ore}_dust`,
						'count': 2
					},
					{
						'item': `emendatusenigmatica:${ore}_dust`,
						'chance': 0.5
					}
				]
			},
			'duration': 40
		})
	})

})