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

    }
}