<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Illuminate\View\ComponentSlot;

class CommonHead extends Component
{
    public string $layout;
    protected ?ComponentSlot $title;
    protected ?ComponentSlot $head;
    protected ?ComponentSlot $meta;


    public function mount($layout, $title, $head, $meta = null)
    {
        $this->layout = $layout;
        $this->title = $title;
        $this->head = $head;
        $this->meta = $meta;
    }

    public function render()
    {
        return view('livewire.common-head',array(
            'layout' => $this->layout,
            'title' => $this->title,
            'head' => $this->head,
            'meta' => $this->meta,
        ));
    }
}
