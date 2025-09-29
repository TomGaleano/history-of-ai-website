
from pyswip import Prolog

class PrologService:
    def __init__(self):
        self.prolog = Prolog()
        self.prolog.consult("src/services/prolog_facts.pl")

    def query(self, query_string):
        try:
            results = list(self.prolog.query(query_string))
            if not results:
                return "false."
            elif len(results) == 1 and not results[0]:
                return "true."
            else:
                return str(results)
        except Exception as e:
            return f"Error: {e}"

prolog_service = PrologService()

def get_prolog_service():
    return prolog_service
