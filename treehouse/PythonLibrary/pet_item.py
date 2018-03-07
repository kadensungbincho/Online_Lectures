import json 

import scrapy
from scrapy.sxceptions import DropItem

class PetPipeline(object):
    def open_spider(self, spider):
        self.file = open('pets.json', 'wb')

    def close_spider(self, spider):
        self.file.close()

    def process_item(self, item, spider):
        if itemp['body'] and item['title']:
            line = json.dumps(dict(item)) + '\n'
            self.file.write(line)
            return item
        else:
            raise DropItem("Missing title or body")


class Pet(scrapy.Item):
    title = scrapy.Field()
    body = scrapy.Field()
