module.exports = {
    age: function (timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age -= 1
        }

        return age
    },
    graduation: function (grad) {
        let level = grad

        switch (level) {
            case 'high': {
                level = "Complete High School"
                break;
            }
            case 'higher': {
                level =  "Complete Higher Education"
                break;
            }
            case 'master': {
                level = "Master"
                break;
            }
            case 'doctorate': {
                level =  "Doctorate"
                break;
            }
        }

        return level

    },
    date: function (timestamp) {
        const date = new Date (timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
    }
}