<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LanguageController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request) {
        if ($request->has('lang')) {
            return response()->json(trans('all', [], 'messages', $request->lang));
        }
        return response()->json([
            'default' => trans('all'),
            'fallback' => trans('all', [], 'messages', config('app.fallback_locale'))
        ]);
    }
}
