<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

// TODO: (WEBSOCKETS) implementamos el ShouldBroadcast para que que se pueda gestionar en tiempo real los eventos
class TestEvents implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public string $message;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(string $message)
    {
        $this->message = $message;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    // TODO: (WEBSOCKETS) implementamos el metodo broadcastOn para que se pueda gestionar en tiempo real los eventos
    // Info: si es un canal privado se usa PrivateChannel en el return.
    public function broadcastOn()
    {
        return new Channel('events');
    }
}
