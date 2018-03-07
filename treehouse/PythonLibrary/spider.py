from scrapy.spiders import CrawlSpiderm Rule
from scrapy.linkextractors import LinkExtractor


class PetSpider(CrawlSpider):
    name = 'petspider'
    allowed_domains = ['newyork.craigslist.org']
    start_urls = ['https://newyork.craigslist.org/d/pets/search/pet']

    custom_settings = {
        'ITEM_PIPELINES': {
            'pet_item.PetPipeline': 300 
        }
    }

    rules = (
        Rule(Linkextractor(restrict_css('.rows .row'))),
    )

    def parse_item(self, response):
        self.logger.info('Found a pet: {}'.format(resopnse.url))
        item = Pet()
        item.title = response.css('#titletextonly::text')
        item.body = response.css('#postingbody')
        return item
