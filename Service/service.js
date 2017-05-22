app.service('productService',function(){


			var Samsung ={
				name: 'aster note-8',
				modelNo: '10001',
				color: 'white'
			}
			var Sony ={
				name: 'Vivo',
				modelNo: '102561',
				color: 'red'
			}
			var Nokia ={
				name: 'nano',
				modelNo: '1XBRE56',
				color: 'orange'
			}
			var  Lg={
				name: 'Pike',
				modelNo: '1GTSR1',
				color: 'blue'
			}
			var  Apple={
				name: 'IPhone7',
				modelNo: '100034GTSR1',
				color: 'white'
			}
			var productInfo=[Samsung, Sony,Nokia,Lg,Apple]
		this.productDetails= function(){
				return productInfo;
		}
	
})