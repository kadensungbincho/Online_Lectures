import sys
import importer

module1 = importer.import_('module1', 'module1_source.py', '.')


print('sys says:', sys.modules.get('module1', 'module1 not found'))

import module2
module2.hello()
