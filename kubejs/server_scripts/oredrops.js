
onEvent('block.loot_tables', event => {
	
//
//
//-----OVERWORLD-----
//
//

	//event.addSimpleBlock('#forge:ores/ender', 'emendatusenigmatica:ender_dust
	
	event.addBlock('#forge:ores/ender', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:ender_dust'})
			})
		})

//
//fin
//
})