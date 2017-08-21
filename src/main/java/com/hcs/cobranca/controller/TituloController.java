package com.hcs.cobranca.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.beans.factory.annotation.Autowired;
import com.hcs.cobranca.model.Titulo;
import com.hcs.cobranca.repository.titulos;

@Controller

@RequestMapping("/titulos")
public class TituloController {
	
	@Autowired
	private titulos titulos;
	
	@RequestMapping("/novo")
	public String novo() {
		return "CadastroTitulo";
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ModelAndView salvar(Titulo titulo) {
		titulos.save(titulo);
		
		ModelAndView mv = new ModelAndView("CadastroTitulo");
		mv.addObject("mensagem","Titulo salco com sucesso!");
		return mv;
	}
	
}
