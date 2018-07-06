'use strict'

const Schema = use('Schema')

class ImagesSchema extends Schema {
  up () {
    this.create('images', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.string('path')
    })
  }

  down () {
    this.drop('images')
  }
}

module.exports = ImagesSchema
