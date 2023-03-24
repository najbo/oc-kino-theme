import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.store('dropdown', {
    open: false,

    toggle() {
        this.open = ! this.open
    }
})


Alpine.start()


