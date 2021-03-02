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

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    },
    grade: function(grad) {
        let g = grad

        switch(g) {
            case '5rd': {
                g = "5th year of elementary school"
                break;
            }
            case '6rd': {
                g = "6th year of elementary school"
                break;
            }
            case '7rd': {
                g = "7th year of elementary school"
                break;
            }
            case '8rd': {
                g = "8th year of elementary school"
                break;
            }
            case '9rd': {
                g = "9th grade of elementary school"
                break;
            }
            case '1high': {
                g = "1st year of high school"
                break;
            }
            case '2high': {
                g = "2nd year of high school"
                break;
            }
            case '3high': {
                g = "3rd year of high school"
                break;
            }
        }

        return g

    }
}