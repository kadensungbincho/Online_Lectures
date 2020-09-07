from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome('../chromedriver')

try:
    driver.get('https://naver.com')

    elem = driver.find_element_by_id('query')

    elem.send_keys('패스트캠퍼스')

    elem.send_keys(Keys.RETURN)

    elem = driver.find_element_by_class_name('_blogBase')
    lis = elem.find_elements_by_tag_name('li')
    for li in lis:
        a_tag = li.find_element_by_name('sh_blog_title')
        print(a_tag.get_attribute('title'))
        print(a_tag.get_attribute('href'))

    
    print('-' * 20)

    elem = driver.find_element_by_class_name('news')
    lis = elem.find_elements_by_xpath('./ul/li')
    for li in lis:
        a_tag = li.find_element_by_class_name('_sp_each_title')
        print(a_tag.text)

    print('-' * 20)
        

except Exception as e:
    print(e)
finally:
    driver.quit()