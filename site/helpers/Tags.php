<?php

namespace Statamic\SiteHelpers;

use Statamic\Extend\Tags as AbstractTags;

class Tags extends AbstractTags
{
    static $number = 0;
    /**
     * The {{ site:example }} tag
     *
     * @return mixed
     */
    public function increment()
    {
        self::$number = self::$number + 1;

        return self::$number;
    }
}
