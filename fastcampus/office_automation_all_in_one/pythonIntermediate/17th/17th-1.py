from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome('../chromedriver')

try:
    driver.get('https://instagram.com')

    elem = driver.find_element_by_name('username')
    elem.send_keys()

    elem = driver.find_element_by_name('password')
    elem.send_keys()
    elem.send_keys()


    

    input()
except Exception as e:
    print(e)
finally:
    driver.quit()