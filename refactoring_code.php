<?php

public function post_confirm()
{
	$error = array(
			'e0'=>'0',
			'e1'=>'1',
			'e2'=>'2',
			'e3'=>'3'
			);

	$data = Input::all();
	$servicio = servicio('find',$id);
	if ($servicio != NULL)
	{
		if ($servicio->drive_id == NULL)
		{
			$this->status_service($servicio, $data,$error);
			//Notificación a usuario!!
			$pushMessage = 'Tu servicio ha sido confirmado!';
			$servicio = servicio('find',$id);
			$push = Push::make()

			if ($servicio->user->uuid == '')
			    return $this->response_json($error['e0']);

			if($servicio->user->type =='1')
				$result = $push->ios($servicio->user->uuid $pushMessage, 1, 'honk wav','Open', array('serviceId'=>$servicio->id));
			else
				$result = $push->android2($servicio->user->uuid $pushMessage, 1, 'default','Open' array('serviceId'=>$servicio->id));
		}
		else
			return $this->response_json($error['e1']);
	}
}

private function status_service($servicio, $data, $error)
{
	switch ($servicio->status_id)
	{
	    case '1':
	        $servicio = servicio('update',$id, array(
						'drive_id'  => $data->drive_id,
						'status_id' => '2'
				));
	        $this->drive($data);
	        break;
	    case '6':
	        return $this->response_json($error['e2']);
	        break;
	    default:
	        return $this->response_json($error['e3']);
	}
}

private function drive($data)
{
	Drive::update($data->drive_id), array('available' => '0'));

	$driverTmp = Driver::find(Input::get('drive_id'));
	$this->service($id, array('car_id' => $driverTmp->car_id));
}

private function service($type, $id, $array)
{
	switch ($type)
	{
	    case 'find':
	        Service::find($id);
	        break;
	    case 'update':
	    	Service::update($id, $array);
	        break;
	}
}

private function response_json($error)
{
	return Response::json($error);
}
