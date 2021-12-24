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


	// Add support for missing emendatusenigmatica ores/chunks in the mechanical squeezer
	['iron', 'gold', 'aluminum'].forEach(ore => {
		event.custom({
			'type': 'integrateddynamics:mechanical_squeezer',
			'item': `emendatusenigmatica:${ore}_ore`,
			'result': {
				'items': [
					{
						'tag': `forge:dusts/${ore}`,
						'count': 2
					},
					{
						'tag': `forge:dusts/${ore}`,
						'chance': 0.5
					}
				]
			},
			'duration': 40
		})
		event.custom({
			'type': 'integrateddynamics:mechanical_squeezer',
			'item': `emendatusenigmatica:${ore}_chunk`,
			'result': {
				'items': [
					{
						'tag': `forge:dusts/${ore}`,
						'count': 2
					},
					{
						'tag': `forge:dusts/${ore}`,
						'chance': 0.5
					}
				]
			},
			'duration': 40
		})
	})
})
