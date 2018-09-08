
const path = require('path')

module.exports = {
  
  head: {
    
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport', content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description', name: 'description', content: 'Meta description'
      }
    ]
    
  },
  css: [
    
    'css/main.scss'
    
  ],
  loading: {
    
    color: '#92D3CE',
    height: '2px'
    
  },
  srcDir: 'client/',
  rootDir: path.resolve(__dirname),
  render: {
    
    gzip: {
      
      threshold: 0
      
    },
    bundleRenderer: {
      
      shouldPreload: (file, type) => {
        
        return ['script', 'style', 'font'].includes(type)
        
      }
      
    }
    
  }
  
}