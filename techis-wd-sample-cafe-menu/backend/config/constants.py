import os
import pytz

##############################
# Config
##############################

STATUS = (
    ('active', 'Active'),
    ('inactive', 'Inactive'),
    ('deleted', 'Deleted'),
)
STATUS_DICT = dict(STATUS)

CATEGORIES = (
    ('hot', 'Hot'),
    ('cold', 'Cold'),
    ('bagel', 'Bagel'),
)
CATEGORIES_DICT = dict(CATEGORIES)
