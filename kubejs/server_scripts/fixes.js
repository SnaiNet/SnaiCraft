onEvent('recipes', event => {

	event.remove({id: 'betternether:quartz_glass'})
	
	event.shaped('8x betternether:quartz_glass', [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: '#forge:gems/quartz',
    A: '#forge:glass'
  })

})