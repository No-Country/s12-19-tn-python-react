export const formatDate = date => {
    const [year, month, day] = date.split('T')[0].split('-').map(item => parseInt(item, 10))
    const newDate = new Date(year, month - 1, day);
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return newDate.toLocaleDateString('es-ES', options)
}