let data = require("../cources.json")
const fs = require("fs")

exports.getCourse = (req, res) => {
    res.send(data)
}
exports.CourceId = (req, res) => {
    const { id } = req.params;
    const cource_found = data.find((course) => course.id == id);
    if (cource_found)
        res.send(cource_found);
    else {
        res.status(404).send('The course with given id ${req.params.id} id not found in database.')
    }
}
exports.create_Cource = (req, res) => {
    const New_cource = req.body;
    data.push(New_cource)
    res.send('new cource ${ New_cource.name} has been added to you database succesfully.')
    fs.writeFileSync('cources.json', JSON.stringify(data, null, 4));
}
exports.cource_delete = (req, res) => {
    const { id } = req.params;
    data = data.filter((course) => course.id !== id)
    if (data) {
        fs.writeFileSync('cources.json', JSON.stringify(data, null, 4));
        res.send('cource with id ${id} deletd from the database')
    }
}

exports.update_course = (req, res) => {
    const { id } = req.params;
    course = data.find((course) => course.id == id)
    if (course) {
        course.name = req.body.name;
        course.logo = req.body.logo;
        course.notes = req.body.notes;
        course.days_to_complete = req.body.days_to_complete;
        course.short_description = req.body.short_description;
        course.type = req.body.type;
        course.course_type = req.body.course_type;
        course.lang_available = req.body.lang_available;
        fs.writeFileSync('cources.json', JSON.stringify(data, null, 4));
        res.send('user with the id ${id} has been updated')
    } else {
        res.status(404).send('The course with given id ${req.params.id}  not found in database.')
    }
}

exports.update_courceParti = (req, res) => {
    const { id } = req.params;
    const { name, logo } = req.body;
    course = data.find((course) => course.id == id)
    if (course) {
        if (name) course.name = name;
        if (logo) course.logo = logo;
        fs.writeFileSync('cources.json', JSON.stringify(data, null, 4));
        res.send('cource with the id ${id} has been update')
    } else {
        res.status(404).send('The course with given id ${req.params.id}  not found in database.')
    }
}